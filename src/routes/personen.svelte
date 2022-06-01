<script>
    import { supabase } from '$lib/supabaseClient';

let naam;
let leeftijd;

//let { error } = await supabase.from('profiles').upsert(updates, {
//        returning: 'minimal' // Don't return the value after inserting
//      });


const invoeren = async()=>{
    await supabase.from('personen')
        .insert([{Naam:naam, Leeftijd:leeftijd}])

    naam="";
    leeftijd="";  
}

</script>


<input type="text" placeholder="naam" bind:value={naam}/>
<input type="number" placeholder="leeftijd" bind:value="{leeftijd}"/>
<input type="button" on:click="{invoeren}"/>
