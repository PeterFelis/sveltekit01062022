import { supabase } from '$lib/supabaseClient';
const user = supabase.auth.user();


export async function wegschrijven(info){
     let infoKlant={
         Naam:info.naam,
         Leeftijd:info.leeftijd,
         autID:user.id
     }
     const reply = await supabase
     .from('personene')
    .insert(infoKlant)
    console.log(reply)
 }

 export async function ophalen () {
    const user = supabase.auth.user();
    const reply = await supabase
    .from('personen')
    .select('*')
    .eq('autID',user.id)
    return reply
}

//.eq('autID',id)



//  export const get = async ({ locals }) => {
//     // locals.userid comes from src/hooks.js
//     const response = await api('get', `todos/${locals.userid}`);
  
//     if (response.status === 404) {
//       // user hasn't created a todo list.
//       // start with an empty array
//       return {
//         body: {
//           todos: []
//         }
//       };
//     }
  
//     if (response.status === 200) {
//       return {
//         body: {
//           todos: await response.json()
//         }
//       };
//     }




// api(method, resource, data) {
//     return fetch(`${base}/${resource}`, {
//       method,
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: data && JSON.stringify(data)
//     });
//   }