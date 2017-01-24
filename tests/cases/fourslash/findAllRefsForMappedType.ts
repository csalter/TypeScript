/// <reference path='fourslash.ts'/>

////interface T { [|a|]: number };
////type U { [K in keyof T]: string };
////type V = { [key in keyof U]: boolean };
////const u: U = { [|a|]: "" }
////const v: V = { [|a|]: true }

verify.rangesReferenceEachOther();
