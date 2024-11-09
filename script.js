/* LA MAGIE : 
Note que : 
            - chaque element a animer DOIT avoir la classe mix 
              pour que cela marche.
            -Les boutons doivent avoir data-filter=".classe-du-truc-a-filtrer"
            - data-filter="all" est present de base et ne filtre rien => pas besoin de .all dans chaque element
*/
var mixer = mixitup(".container");
