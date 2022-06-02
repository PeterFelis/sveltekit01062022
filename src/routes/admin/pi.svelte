<script>
  // dit is een test bestand, samen met producten.js om alle producten in één keer in te voeren

  import { supabase } from '$lib/supabaseClient';
  import { producten } from './producten';

  let boodschap = '';
  let ingevoerdstatus = '';
  let tellerfout = 0;
  let tellergoed = 0;

  const invoegen = async (item) => {
    const { data, error } = await supabase
      .from('producten')
      .insert({ typeNummer: item.product, omschrijving: item.omschrijving });
    if (error) {
      return { waarde: 'fout' };
    }
    return { waarde: 'goed' };
  };

  const invoerenAlles = () => {
    ingevoerdstatus = '';
    tellergoed = 0;
    tellerfout = 0;
    producten.forEach((item) => {
      let antwoord = invoegen(item);
      console.log(antwoord);
    });
    boodschap = `${tellergoed} ingevoerd en ${tellerfout} niet ingevoerd`;
  };
</script>

{boodschap}
{ingevoerdstatus}

<input type="button" value="alle producten invoeren" on:click={invoerenAlles} />
