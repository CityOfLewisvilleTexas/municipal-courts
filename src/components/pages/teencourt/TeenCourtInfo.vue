<template>
     <v-container>
         <div class="py-3 text-xs-left" v-if="$route.query.lang == 'es'">
            <h1 class="pt-3"> Teen Court </h1>
            <v-container>
                <h2> ¿Qué es Teen Court? </h2>
                <p> Teen Court es un programa alternativo y voluntario que ofrece a los jóvenes delincuentes la oportunidad de hacer una restitución por un delito a través del servicio a la comunidad, clases especializadas y servicio de jurado. Al llevar a los adolescentes ante el jurado de sus pares, Teen Court busca disuadir el comportamiento ilícito futuro al tiempo que proporciona experiencia directa con el sistema judicial y una mayor comprensión de su futuro papel como ciudadanos productivos. En lugar de pagar una multa, el adolescente es condenado a un servicio constructivo en una organización de servicio comunitario y al jurado en el Tribunal de Adolescentes. También son posibles otras sanciones no monetarias. Una vez que se completa con éxito, el caso se desestima, evitando así la multa y manteniendo el registro del adolescente claro. </p>

                <h2 class = "pt-3"> Objetivos </h2>
                <p>
                    <ul>
                        <li class="my-3"> Responsabilizar a los delincuentes juveniles por su comportamiento y ayudarles a reconocer que las consecuencias son el resultado directo de sus propias acciones. </li>
                        <li class="my-3"> Brindar a los delincuentes adolescentes una experiencia positiva en el sistema judicial, reduciendo así la reincidencia y ayudando a disuadir la posibilidad de cometer otros delitos. </li>
                        <li class="my-3"> Educar a los jóvenes voluntarios y delincuentes sobre el proceso legal y judicial. </li>
                        <li class="my-3"> Establezca relaciones positivas entre la comunidad y sus jóvenes, promoviendo una mayor comprensión y comunicación </li>
                        <li class="my-3"> Ayude a Lewisville, Flower Mound y las agencias de la comunidad local a ahorrar gastos laborales al proporcionar a los jóvenes como trabajadores de servicios comunitarios. </li>
                    </ul>
                </p>
            </v-container>
        </div>
        <div class="py-3 text-xs-left" v-else>
            <h1 class="pt-3">Teen Court</h1>
            <v-container>
                <h2>What is Teen Court?</h2>
                <p>Teen Court is an alternative, voluntary program which offers young offenders an opportunity to make restitution for an offense through community service, specialized classes and jury service. By bringing the teens before a jury of their peers, Teen Court seeks to deter future unlawful behavior while providing direct experience with the court system and a greater understanding of their future role as productive citizens.  Instead of paying a fine, the teen is sentenced to constructive service in a community service organization and jury duty in the Teen Court. Other non-monetary sanctions are also possible. Upon successful completion, the case is dismissed thus avoiding the fine and keeping the teen’s record clear.</p>

                <h2 class="pt-3">Goals</h2>
                <p>
                    <ul>
                        <li class="my-3">Hold juvenile offenders responsible for their behavior and help them recognize that the consequences are a direct result of their own actions. </li>
                        <li class="my-3">Provide teenage offenders with a positive experience in the judicial system, thereby reducing recidivism and helping deter the possibility of committing other crimes. </li>
                        <li class="my-3">Educate youth volunteers and offenders on the legal and judicial process. </li>
                        <li class="my-3">Establish positive relationships between the community and its youth, promoting increased understanding and communication </li>
                        <li class="my-3">Assist Lewisville, Flower Mound and local community agencies in saving labor expense by providing youth as community service workers.</li>
                    </ul>
                </p>
            </v-container>
        </div>
    </v-container>
</template>

