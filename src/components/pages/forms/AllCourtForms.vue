<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
      <h1 class="pt-3">Formularios de corte</h1>
      <p>
        Aquí hay una lista de los formularios que se usan comúnmente cuando se
        trabaja con el Tribunal Municipal de Lewisville.
      </p>
      <ul>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=352"
            target="_blank"
          >
            Formulario de solicitud de curso de conducción segura y declaración
            jurada [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=11041"
            target="_blank"
          >
            Formulario de solicitud de Disposición Diferida y Declaración Jurada
            [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=17800"
            target="_blank"
          >
            Folleto informativo / fino del Tribunal Municipal de 2019 [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=332"
            target="_blank"
          >
            Formulario de solicitud de registro del conductor [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=348"
            target="_blank"
          >
            Información financiera para el tribunal - Inglés [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=347"
            target="_blank"
          >
            Formulario Por Corte De Indigentes [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=346"
            target="_blank"
          >
            Declaración jurada de seguro [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=2449"
            target="_blank"
          >
            Formulario de moción para continuar [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=344"
            target="_blank"
          >
            Formulario de declaración de culpabilidad [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=343"
            target="_blank"
          >
            Bono de apariencia de garantía * [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=4295"
            target="_blank"
          >
            Folleto de la corte para adolescentes [PDF]
          </a>
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=4294"
            target="_blank"
          >
            Folleto para voluntarios de la corte para adolescentes [PDF]
          </a>
        </li>
      </ul>

      <p>
        * Cualquier compañía de fianzas o abogado que desee actuar como Fianza
        en cualquier orden de delito menor de Lewisville Clase C o citación
        instanciada deberá seguir estos procedimientos. Se deberá completar un
        formulario de fianza de apariencia de Lewisville Surety para cada
        violación y luego entregarlo junto con los anexos necesarios. No se
        aceptarán bonos de garantía que no sean bonos oficiales de Lewisville,
        no se aceptarán bonos incompletos o enviados por fax.
      </p>

      <p>
        La fecha de la audiencia judicial se asignará una vez que se hayan
        archivado los bonos de comparecencia con el Tribunal Municipal de
        Lewisville o el Departamento de Policía. Es responsabilidad del fiador o
        del abogado asegurarse de que su Director esté al tanto de la fecha de
        corte asignada. Si se restablece una fecha de corte o se programa una
        nueva fecha de audiencia, la Garantía y el Director, en su última
        dirección conocida, serán notificados por correo de la nueva fecha de
        corte. El Fiador será responsable de la comparecencia del Director en
        todas las comparecencias ante el tribunal hasta que se declare culpable
        o no se haya presentado ninguna contienda o se haya desestimado el caso.
      </p>

      <p>
        Para los abogados que actúan como fianzas, las cartas de representación
        de los abogados se revisarán una vez que se reciban en el Tribunal
        Municipal de Lewisville. Una vez recibida la carta de representación del
        abogado, el caso se colocará en la siguiente lista de solicitudes de
        abogados y se enviará una notificación al abogado y al Director, en su
        última dirección conocida, de la fecha de la declaración de
        culpabilidad. Esto no contará en el caso como un reinicio. Es
        responsabilidad del abogado asegurarse de que el Director esté al tanto
        de su fecha de corte asignada y de comparecer en todos los
        procedimientos judiciales.
      </p>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Court Forms</h1>
      <p>
        Here are a list of commonly used forms needed when working with the
        Lewisville Municipal Court.
      </p>
      <ul>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=352"
            target="_blank"
            >Driving Safety Course request form and Affidavit [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=11041"
            target="_blank"
            >Deferred Disposition request form and Affidavit [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=17800"
            target="_blank"
            >Municipal Court Informational/Fine Brochure 2019 [PDF}</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=332"
            target="_blank"
            >Driver Record Request Form [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=348"
            target="_blank"
            >Financial Information for Court - English [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=347"
            target="_blank"
            >Formulario Por Corte De Indigentes [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=346"
            target="_blank"
            >Insurance Affidavit [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=2449"
            target="_blank"
            >Motion for Continuance Form [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=344"
            target="_blank"
            >Plea Form [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=343"
            target="_blank"
            >Surety Appearance Bond* [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=4295"
            target="_blank"
            >Teen Court Brochure [PDF]</a
          >
        </li>
        <li class="my-2">
          <a
            href="https://www.cityoflewisville.com/home/showdocument?id=4294"
            target="_blank"
            >Teen Court Volunteer Brochure [PDF]</a
          >
        </li>
      </ul>

      <p>
        * Any bond company or attorney that wishes to act as a Surety on any
        Lewisville Class C misdemeanor warrant or instantiated citation will be
        required to follow these procedures. A Lewisville Surety appearance bond
        form will need to be completed for each violation and then turned in
        along with the necessary attachments. Surety appearance bonds that are
        not official Lewisville bonds, bonds that are incomplete or faxed bonds
        will not be accepted.
      </p>

      <p>
        The court hearing date will be assigned once the Surety appearance bonds
        are filed with the Lewisville Municipal Court or Police Department. It
        is the bondsman or attorney's responsibility to make sure their
        Principal is aware of the assigned court date. If a court date is reset
        or a new hearing date is scheduled the Surety and Principal, at their
        last known address, will be notified by mail of the new court date. The
        Surety will be responsible for the Principal's appearance at all court
        appearances until a plea of guilty or no contest has been entered or the
        case is dismissed.
      </p>

      <p>
        For attorneys acting as sureties, the attorney representation letters
        will be reviewed once they are received at the Lewisville Municipal
        Court. Upon receipt of the attorney representation letter, the case will
        be placed on the next attorney plea docket and a notice will be mailed
        to the attorney and Principal, at their last know address, of the plea
        docket date. This will not count against the case as a reset. It is the
        attorney's responsibility to make sure the Principal is aware of their
        assigned court date and makes an appearance at all court proceedings.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
