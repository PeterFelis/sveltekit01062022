import { supabase } from '$lib/supabaseClient';
const user = supabase.auth.user();

export async function wegschrijven(info) {
    let infoKlant = {
        Naam: info.naam,
        Leeftijd: info.leeftijd,
        autID: user.id
    }
    const reply = await supabase
        .from('personene')
        .insert(infoKlant)
    console.log(reply)
}

export async function ophalen() {
    const user = supabase.auth.user();
    const reply = await supabase
        .from('personen')
        .select('*')
        .eq('autID', user.id)
    return reply
}