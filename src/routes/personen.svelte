<script>

    import { supabase } from '$lib/supabaseClient';

let naam;
let leeftijd;


const tonen = async function() {
    const {data,error} = await supabase.from('personen').select();
    return data;
};

const invoeren = async () =>{
    await supabase.from('personen')
        .insert({Naam:naam, Leeftijd:leeftijd})
    naam="";
    leeftijd="";
};
    
let promise = tonen;

function ophalen() {
    promise = tonen();  
}

function weergeven(){
    invoeren();
}

</script>



<input type="text" placeholder="naam" bind:value={naam}/>
<input type="number" placeholder="leeftijd" bind:value="{leeftijd}"/>
<input type="button" on:click={ophalen} value="versturen"/>


<input type="button" on:click={tonen} value="tonen"/>

{#await tonen}
	<p>...waiting</p>
{:then data}
	<img src={data.message} alt="Dog image" />
{:catch error}
	<p>An error occurred!</p>
{/await}