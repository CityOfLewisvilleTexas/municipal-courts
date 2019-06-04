<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$router.history.current.query.lang == 'es'"
    >
      <h1 class="pt-3">Servicio de jurado</h1>
      <v-container>
        <h2>¿Por qué es importante el servicio de jurado?</h2>
        <p>
          La Constitución de los Estados Unidos y la Constitución de Texas
          garantizan a todas las personas el derecho a ser juzgados por un
          jurado imparcial de sus pares, independientemente de su raza,
          religión, sexo, origen nacional o situación económica.
        </p>

        <h2>¿Cuál es mi deber como jurado?</h2>
        <p>
          Como miembro del jurado, debe ser justo e imparcial. Sus acciones y
          decisiones también deben estar libres de cualquier sesgo o prejuicio
          porque sus acciones y decisiones son la base de nuestro sistema
          judicial.
        </p>

        <h2>¿Cómo me seleccionaron?</h2>
        <p>
          Fue seleccionado al azar de una lista de registros de votantes y una
          lista de registros de conductores del condado en el que vive.
        </p>

        <h2>¿Soy elegible?</h2>
        <p class="mt-3">Los jurados deben ser:</p>
        <ul>
          <li>ciudadano de los Estados Unidos.</li>
          <li>un residente de la Ciudad de Lewisville.</li>
          <li>al menos 18 años de edad.</li>
          <li>capaz de leer y escribir el idioma inglés.</li>
          <li>de la mente sana.</li>
        </ul>

        <p class="mt-3">No puede participar en un jurado si:</p>
        <ul>
          <li>
            han sido condenados por un delito grave o por cualquier tipo de
            delito de robo (a menos que se hayan restablecido sus derechos);
          </li>
          <li>
            ahora están en libertad condicional o adjudicación diferida por un
            delito grave o por cualquier tipo de robo; o
          </li>
          <li>
            ahora están bajo acusación por un delito grave o ahora están bajo
            cargos penales por cualquier tipo de robo.
          </li>
          <li>
            Si tiene alguna duda, o cree que no está calificado para formar
            parte de un jurado por alguna de las razones anteriores o por alguna
            otra razón, notifique al juez.
          </li>
        </ul>

        <h2 class="mt-3">¿Quién puede ser excusado del Servicio de Jurado?</h2>
        <p class="mt-3">
          Usted tiene derecho a ser excusado como miembro del jurado si:
        </p>
        <ul>
          <li>son mayores de 70 años de edad;</li>
          <li>
            tener la custodia legal de un niño menor de 12 años y el servicio de
            jurado dejaría al niño sin supervisión;
          </li>
          <li>son estudiantes en clase;</li>
          <li>
            es el cuidador de una persona que no puede cuidarse a sí misma (un
            inválido); o
          </li>
          <li>
            puede mostrar un impedimento físico o mental o una incapacidad para
            comprender o comunicarse en inglés.
          </li>
        </ul>
        <p>
          Existe una sanción para los jurados que no responden a una citación.
          Un jurado puede recibir una multa de hasta $ 100 si: 1) no asiste a la
          corte en desobediencia al aviso sin una excusa razonable; o 2)
          presenta un reclamo falso de exención del servicio de jurado.
        </p>

        <h2 class="mt-3">¿Cuáles son los diferentes tipos de casos?</h2>
        <p>
          Hay dos tipos básicos de casos, criminales y civiles (incluidos los
          casos familiares).
        </p>

        <h2 class="mt-3">Casos criminales:</h2>
        <p>
          Un caso criminal resulta cuando una persona es acusada de cometer un
          crimen. Usted, como jurado, debe decidir si la persona acusada es
          culpable o no. Se presume que el acusado es inocente, y el Estado,
          representado por el fiscal de la ciudad, debe probar que el acusado es
          culpable "más allá de una duda razonable".
        </p>

        <h2 class="mt-3">Casos civiles:</h2>
        <p>
          Un caso civil resulta de un desacuerdo o disputa entre dos o más
          partes privadas. En un caso civil, usted, como miembro del jurado,
          debe responder preguntas sobre hechos disputados basándose en el
          testimonio y las pruebas admitidas por el juez. Las respuestas a estas
          preguntas se denominan veredicto. Nota: el Tribunal Municipal no
          atiende casos civiles.
        </p>

        <h2 class="mt-3">¿Me pagarán por ser un miembro del jurado?</h2>
        <p>
          Sí. Si lo seleccionan para formar parte del jurado, se le pagará $
          10.00 por cada día que realmente preste servicio. El Tribunal de
          Adolescentes de Lewisville solicita donaciones para su fondo de becas
          anuales y usted puede, pero no está obligado a hacerlo, aportar su
          cuota de jurado a este fondo. Para obtener más información, consulte
          al alguacil u otro personal de la corte.
        </p>

        <h2 class="mt-3">
          ¿Mi empleador debe pagarme mientras estoy en servicio de jurado?
        </h2>
        <p>
          Su empleador no está obligado a pagarle mientras esté en servicio de
          jurado. Sin embargo, los empleadores tienen prohibido por ley despedir
          a un empleado por servir como miembro del jurado. Un empleado cuyo
          empleo termina en violación de esta sección tiene derecho a regresar
          al mismo empleo que tenía cuando fue convocado para un servicio de
          jurado si el empleado, tan pronto como sea práctico después de la
          liberación del servicio de jurado, le da al empleador un aviso real
          que el empleado pretende regresar. (Código de Práctica Civil y
          Recursos, art. 122.001).
        </p>

        <h2 class="mt-3">¿Quién puede tener un juicio con jurado?</h2>
        <p>
          Cualquier persona acusada de un delito o cualquier parte en un caso
          civil tiene derecho a un juicio por jurado. Todas las partes son
          iguales ante la ley y cada una tiene derecho al mismo trato justo.
        </p>

        <h2 class="mt-3">¿Existen reglas sobre la conducta del jurado?</h2>
        <p>
          Sí. La Corte Suprema de Texas tiene reglas para ayudarlo en su
          conducta como miembro del jurado que le será entregada por el juez.
        </p>

        <h2 class="mt-3">
          ¿Cómo se selecciona un jurado para un caso particular?
        </h2>
        <p>
          Los casos serán escuchados por jurados de 6 jurados. Un grupo más
          grande, llamado panel, será enviado a la corte de primera instancia
          (sala de audiencias) donde se interrogará a los jurados bajo la
          supervisión del juez. <br />
          <br />
          Un jurado puede ser excusado del panel si se demuestra que el jurado
          no puede actuar imparcialmente con respecto al caso que se va a
          escuchar. Además, a cada lado se le permite eliminar un número
          determinado de jurados del panel sin tener que mostrar ninguna razón.
          El jurado de primera instancia será el primero de los 6 jurados
          restantes en el panel.
        </p>

        <h2 class="mt-3">¿Qué es Voir Dire o Questioning Of The Jury Panel?</h2>
        <p>
          Es una forma para que las partes seleccionen un jurado justo e
          imparcial. Bajo el sistema de justicia, puede ser interrogado por cada
          uno de los abogados antes de que decidan remover a un cierto número de
          jurados del panel de jurados. <br />
          <br />
          Por ejemplo, el abogado puede hacerle preguntas para ver si está
          relacionado con el juicio o si tiene algún prejuicio o sesgo hacia
          alguien en el juicio. Estas preguntas no pretenden avergonzarlo, sino
          ayudar a los abogados en el proceso de selección del jurado. Puede
          pedirle al juez que le permita responder algunas preguntas lejos de
          los otros miembros del jurado.
        </p>

        <h2 class="mt-3">
          ¿Qué sucede si tengo una necesidad especial o una emergencia?
        </h2>
        <p>
          Una vez que haya sido seleccionado como miembro del jurado en un panel
          de prueba, si tiene una necesidad especial o una emergencia,
          infórmeselo al alguacil.
        </p>

        <h2 class="mt-3">¿Cómo actuamos durante el juicio?</h2>
        <p>
          Una sesión de la corte comienza cuando el oficial de la corte raps por
          orden. Todos en la corte se levantan. El juez toma su lugar en el
          banco, y el oficial de la corte anuncia la apertura de la corte. Un
          procedimiento similar se utiliza cuando la corte aplaza. La cortesía y
          la cortesía comunes son guías seguras sobre la forma en que deben
          actuar los jurados. Por supuesto, no se le permitirá leer los
          periódicos o revistas en la sala del tribunal, ni debe mantener una
          conversación con otro miembro del jurado en la sala del tribunal
          durante el juicio. <br />
          <br />
          Usted será tratado con consideración y su comodidad y conveniencia
          serán servidas siempre que sea posible. Si hay una emergencia o un
          asunto que afecta su servicio, debe informarlo al juez. En el caso de
          una emergencia personal, notifique al Juez a través de cualquier
          personal de la corte, o puede pedir ver al Juez en privado.
          <br />
          <br />
          Debes prestar mucha atención al testimonio. Usted ha jurado hacer caso
          omiso de sus prejuicios y seguir las instrucciones de la Corte
          emitiendo un veredicto de acuerdo con su mejor criterio. Debes
          mantener una mente abierta. La experiencia humana muestra que, una vez
          que una persona llega a una conclusión preliminar de un conjunto de
          hechos, vacila en cambiar su opinión.
          <br />
          <br />
          Del mismo modo, los jurados no deben discutir el caso ni siquiera
          entre ellos hasta que finalmente se concluya. Por lo tanto, es
          prudente que ni siquiera intente tomar una decisión con respecto a los
          hechos de un caso hasta que se le haya presentado toda la evidencia y
          se le haya informado sobre la ley aplicable al caso. También tenga en
          cuenta que se requiere ropa adecuada. Todas las personas que ingresen
          a la sala del tribunal deben vestirse con ropa que se ajuste a la
          dignidad y solemnidad de los procedimientos judiciales (por ejemplo,
          no se permiten sombreros, pantalones cortos, camisetas sin mangas ni
          camisetas).
        </p>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Jury Service</h1>
      <v-container>
        <h2>Why is Jury Service important?</h2>
        <p>
          The United States Constitution and the Texas Constitution guarantee
          all people the right to trial by an impartial jury of their peers,
          regardless of race, religion, sex, national origin or economic status.
        </p>

        <h2>What is my duty as a Juror?</h2>
        <p>
          As a juror, you must be fair and impartial. Your actions and decisions
          must also be free of any bias or prejudice because your actions and
          decisions are the foundation of our judicial system.
        </p>

        <h2>How was I selected?</h2>
        <p>
          You were selected at random from a list of voter registrations and a
          list of driver registrations from the county in which you live.
        </p>

        <h2>Am I eligible?</h2>
        <p class="mt-3">Jurors must be:</p>
        <ul>
          <li>a citizen of the United States.</li>
          <li>a resident of the City of Lewisville.</li>
          <li>at least 18 years of age.</li>
          <li>able to read and write the English language.</li>
          <li>of sound mind.</li>
        </ul>

        <p class="mt-3">You cannot serve on a jury if you:</p>
        <ul>
          <li>
            have been convicted of a felony or of any type of theft offense
            (unless your rights have been restored);
          </li>
          <li>
            are now on probation or deferred adjudication for a felony or for
            any type of theft; or
          </li>
          <li>
            are now under indictment for a felony or are now under criminal
            charges for any type of theft.
          </li>
          <li>
            If you are in doubt, or think you may not be qualified to serve on a
            jury for one of the above or any other reasons, please notify the
            Judge.
          </li>
        </ul>

        <h2 class="mt-3">Who can be excused from Jury Service?</h2>
        <p class="mt-3">You are entitled to be excused as a juror if you:</p>
        <ul>
          <li>are over 70 years of age;</li>
          <li>
            have legal custody of a child under 12 years of age and jury service
            would leave the child unsupervised;
          </li>
          <li>are a student in class;</li>
          <li>
            are the caretaker of a person who is unable to care for themselves
            (an invalid); or
          </li>
          <li>
            can show a physical or mental impairment or an inability to
            comprehend or to communicate in English.
          </li>
        </ul>
        <p>
          There is a penalty for jurors failing to respond to a summons. A juror
          may be fined up to $100 if he: 1) fails to attend court in
          disobedience to the notice without reasonable excuse; or 2) files a
          false claim of exemption from jury service.
        </p>

        <h2 class="mt-3">What Are The Different Types Of Cases?</h2>
        <p>
          There are two basic types of cases, criminal and civil (including
          family cases).
        </p>

        <h2 class="mt-3">Criminal Cases:</h2>
        <p>
          A criminal case results when a person is accused of committing a
          crime. You, as a Juror, must decide whether the person charged is
          guilty or not. The accused person is presumed innocent, and the State,
          represented by the city prosecutor, must prove the defendant is guilty
          "beyond a reasonable doubt."
        </p>

        <h2 class="mt-3">Civil Cases:</h2>
        <p>
          A civil case results from a disagreement or dispute between two or
          more private parties. In a civil case, you, as a juror, must answer
          questions of disputed facts based upon the testimony and evidence
          admitted by the Judge. The answers to these questions are called the
          verdict. Note: Municipal Court does not hear civil cases.
        </p>

        <h2 class="mt-3">Will I be paid for being a Juror?</h2>
        <p>
          Yes. If you are selected to serve on the jury, you will be paid $10.00
          for each day you actually serve. The Lewisville Teen Court solicits
          donations for their annual scholarship fund and you may, but are not
          obligated to, contribute your juror fee to this fund. For more
          information, please ask the bailiff or other court personnel.
        </p>

        <h2 class="mt-3">Must my employer pay me while I am on Jury Duty?</h2>
        <p>
          Your employer is not required to pay you while on jury duty. However,
          employers are prohibited by law from firing an employee for serving as
          a Juror. An employee whose employment is terminated in violation of
          this section is entitled to return to the same employment that was
          held when summoned for jury service if the employee, as soon as
          practical after release from jury service, gives the employer actual
          notice that the employee intends to return. (Civil Practice and
          Remedies Code, section 122.001).
        </p>

        <h2 class="mt-3">Who Can Have A Jury Trial?</h2>
        <p>
          Any person charged with a criminal offense or any party to a civil
          case has a right to a jury trial. All parties are equal before the law
          and each is entitled to the same fair treatment.
        </p>

        <h2 class="mt-3">Are There Rules about Jury Conduct?</h2>
        <p>
          Yes. The Texas Supreme Court has rules to assist you in your conduct
          as a Juror which will be given to you by the Judge.
        </p>

        <h2 class="mt-3">How Is A Juror Selected For A Particular Case?</h2>
        <p>
          Cases will be heard by juries of 6 jurors. A larger group, called a
          panel, will be sent to the trial court (courtroom) where the jurors
          will be questioned under the supervision of the Judge. <br /><br />
          A juror may be excused from the panel if it is shown that the juror
          cannot act impartially concerning the case to be heard. In addition,
          each side is allowed to remove a given number of jurors from the panel
          without having to show any reason. The trial jury will be the first 6
          of the remaining jurors on the panel.
        </p>

        <h2 class="mt-3">
          What Is Voir Dire Or Questioning Of The Jury Panel?
        </h2>
        <p>
          It is a way for the parties to select a fair and impartial jury. Under
          the justice system, you may be questioned by each of the lawyers
          before they decide to remove a certain number of jurors from the jury
          panel. <br /><br />
          For example, the lawyer may ask you questions to see if you are
          connected to the trial or if you have any prejudice or bias toward
          anyone in the trial. These questions are not intended to embarrass
          you, but rather to help the lawyers in the jury selection process. You
          may ask the judge to allow you to answer some questions away from the
          other jurors.
        </p>

        <h2 class="mt-3">What If I Have A Special Need or Emergency?</h2>
        <p>
          After you have been selected as a juror on a trial panel, if you have
          a special need or an emergency, tell the bailiff.
        </p>

        <h2 class="mt-3">How Do We Act During the Trial?</h2>
        <p>
          A court session begins when the court officer raps for order. Everyone
          in the court rises. The Judge takes his or her place on the bench, and
          the court officer announces the opening of court. A similar procedure
          is used when court adjourns. Common courtesy and politeness are safe
          guides as to the way jurors should act. Of course, you will not be
          permitted to read newspapers or magazines in the courtroom, nor should
          you carry on a conversation with another juror in the courtroom during
          the trial. <br /><br />
          You will be treated with consideration and your comfort and
          convenience will be served whenever possible. If there is an emergency
          or a matter affecting your service, you should bring it to the
          attention of the Judge. In the event of a personal emergency, notify
          the Judge through any court personnel, or may ask to see the Judge
          privately.
          <br /><br />
          You must give close attention to the testimony. You are sworn to
          disregard your prejudices and follow the Court’s instructions by
          rendering a verdict according to your best judgment. You should keep
          an open mind. Human experience shows that, once a person comes to a
          preliminary conclusion to a set of facts, they hesitate to change
          their view.
          <br /><br />
          Similarly, jurors should not discuss the case even among themselves
          until it is finally concluded. Therefore, it is wise for you not even
          to attempt to make up your mind on the facts of a case until all the
          evidence has been presented to you, and you have been instructed on
          the law applicable to the case. Also keep in mind that proper clothing
          is required. All persons entering the courtroom should be dressed in
          clothing reasonably befitting the dignity and solemnity of the
          courtroom proceedings (e.g., hats, shorts, tank tops, or T-shirts are
          not permitted).
        </p>
      </v-container>
    </div>
  </v-container>
</template>

<script></script>

<style></style>
