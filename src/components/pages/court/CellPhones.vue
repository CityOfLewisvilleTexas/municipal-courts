<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
     <h1 class="pt-3"> Teléfonos celulares y otros dispositivos electrónicos </h1>
       <v-container>
         <p> Por orden permanente del Juez Presidente, no se pueden usar teléfonos celulares u otros dispositivos electrónicos (incluidas cámaras o dispositivos de grabación) en 
    ninguna capacidad en la sala del tribunal. Cualquier dispositivo electrónico que se lleve a la sala del tribunal debe estar apagado o completamente silenciado. El uso de un teléfono celular o cualquier otro dispositivo electrónico en la sala del tribunal también puede constituir un desacato directo al tribunal que se castiga con una multa que no exceda los $ 100.00 
    Y hasta tres días en la cárcel.
         </p>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Cell Phones and Other Electronic Devices</h1>
      <v-container>
        <p>Per the standing order of the Presiding Judge, no cell phones or other electronic devices (including cameras or recording devices) may be used in any capacity in the courtroom. 
            Any electronic device brought into the courtroom must be turned off or completely silenced. 
            Use of a cell phone or any other electronic device in the courtroom may also constitute direct contempt of court which is punishable by a fine not to exceed $100.00 
            and up to three days in jail.  
        </p>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
