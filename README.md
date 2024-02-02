Pasos para ejecutar la aplicación React Native en Android:
Requisitos previos:

Node.js instalado en su computadora.
Android Studio instalado en su computadora.
Un dispositivo Android físico o un emulador de Android.
1. Instalación de las herramientas:

Instale la CLI de React Native:
npm install -g react-native-cli
Instale el SDK de Android:
sdkmanager --install "cmdline-tools;platform-tools;android-29"
Instale el emulador de Android (si no tiene un dispositivo físico):
sdkmanager --install "emulator"
2. Creación del proyecto:

Cree un nuevo proyecto React Native:
react-native init MyProject
3. Ejecución del proyecto en el emulador:

Inicie el emulador de Android.

Vaya a la carpeta de su proyecto en la terminal.

Ejecute el siguiente comando:

react-native run-android
4. Ejecución del proyecto en un dispositivo físico:

Conecte su dispositivo Android a su computadora mediante un cable USB.

Habilite la depuración USB en su dispositivo.

En la terminal, ejecute el siguiente comando:

react-native run-android --device
