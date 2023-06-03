/* Examples
obj = { a: { b: '1', c: '2' } }
path = "a.b"
return 1
  
getDescendantProp(obj, path)      => 1
*/


const getDescendantProp = (obj: any, path: string) =>
    path.split(".").reduce((acc, part) => acc && acc[part], obj);

export default getDescendantProp