<script>
  import { goto } from '$app/navigation';

  // als het goed is is dit gelukt
  import { supabase } from '$lib/supabaseClient';
  import { klanten } from './klanten';

  // check of dit mag anders naar index pagina
  if (!supabase.auth.user()) goto('/');
  else if (supabase.auth.user().user_metadata.toegang < 10) goto('/');

  let teller = 0;

  const accountMaken = async (klant) => {
    let toegang;
    if (klant.wachtwoord.length < 6) klant.wachtwoord = 'fdrefer';
    klant.emailadres = klant.emailadres.trim();
    if (klant.aktief < 5) toegang = 1;
    else toegang = 10;
    let { user, session, error } = await supabase.auth.signUp(
      {
        email: klant.emailadres,
        password: klant.wachtwoord
      },
      {
        data: {
          toegang: toegang
        }
      }
    );

    if (error !== null) {
      console.log('error', error);
      console.log(klant.emailadres);
    }
    let id = user.id;

    let afnemer = {
      autID: id,
      klantnaam: klant.bedrijfsnaam,
      straat: klant.straatnaam,
      nr: klant.straatnummer,
      postcode: klant.postcode,
      plaats: klant.plaatsnaam
    };

    let { data1, error1 } = await supabase.from('klanten').insert(afnemer);
    if (!error1 == null) {
      console.log('error klanten', error1, data1);
      return;
    }

    let persoon = {
      autID: id,
      voornaam: klant.voornaam,
      achternaam: klant.achternaam,
      geslacht: null,
      geboortedatum: null,
      gebruikersnaam: klant.gebruikersnaam
    };

    let { data2, error2 } = await supabase.from('personen').insert(persoon);
    if (!error2 == null) {
      console.log('error personen', error2, data2);
      return;
    }

    teller++;
  };

  const starten = () => {
    const Nklanten = klanten.reverse();
    Nklanten.forEach((klant) => accountMaken(klant));
  };

  const wissen = async () => {
    //tabel klanten leegvegen
    await supabase.from('klanten').delete().neq('id', 0);
    console.log('leegvegen klanten');
    await supabase.from('personen').delete().neq('id', 0);
    console.log('leegvegen personen');
    //denk er aan: auts leegmaken in supabase sql!!
  };
</script>

<div class="container pt-20 mx-auto">
  <h1 class="text-xl">oude accounts invoegen</h1>
  <p>aantal: {teller}</p>

  <button on:click={wissen} class="rounded-md border-2 p-2">wissen</button>
  druk de knop om alle klanten over te dragen
  <button class="rounded-md border-2 p-2" on:click={starten}>overdragen</button>
</div>
