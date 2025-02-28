## Prueba Técnica React Native | Bitnovo
Esta prueba tecnica la realice en react native con expo, la hice pixel perfect de acuerdo a la UI que nos proporcionaron via Figma.
Todo el manejo del estado de la aplicacion la hice con Zustand y el manejo de la navegacion con expo-router.
Pueden ver todo el codigo del estado global en hooks/useStoreApp.ts.
Para hacer la llamada post al endpoint y crear la orden use un fetch simple, pero tambien podria haber usado axios u otra libreria.
Hice un cambio en el tema de la ui, en vez de verse el monto con una coma "," use un punto "." ya que el endpoint proporcionado no aceptaba la coma y nos da un error.


## Para comenzar:
1. Instala las dependencias

   ```bash
   npm install
   ```

2. Corre la app con un prebuild

   ```bash
    npx expo run:android
   ```