<template>
<v-container>
    <div id="court-fines" class="py-5 text-xs-left">
            <h1 class="py-3">Pay Court Fines</h1>
            <h2 class="py-3">There are several ways to pay municipal court fines. In order to pay your court fines please select from the options below:</h2>
            
            <ol>
                <li @click="showPayOnline = !showPayOnline" id="showPayOnline">Pay Municipal Court fines Online</li>
                <li>Pay Municipal Court fines by mail, mail to Lewisville Municipal Court, P.O. Box 299002, Lewisville, TX 75029</li>
                <li>Pay Municipal Court fines in person at <a href="https://www.google.com/maps/place/1197+W+Main+St,+Lewisville,+TX+75067/@33.0429208,-97.0233096,17z/data=!3m1!4b1!4m2!3m1!1s0x864c2debdde1760b:0xaba846a4f21b12df?hl=en">1197 W. Main St., Lewisville, TX 75067</a></li>
                <li>Pay Municipal Court fines at after hours drop box located at 1197 W. Main Street</li>
                <li>Pay Municipal Court fines by phone by calling 1.800.444.1187. A processing fee will apply when using the online payment system.</li>
            </ol>

            <h2 class="py-4">The hours of operation are as follows: Monday&mdash;Thursday:7:30am - 5:30pm / Friday 7:30 - 11:30am</h2>

        </div>
        <div id="pay-online" v-if="showPayOnline" class="text-xs-left">
        <h1 class="py-3">Pay Municipal Court Fines Online</h1>               
        <p>
        You must agree to the following terms to use this online payment system. Please read the following information carefully.
        </p>
        <p>
        Failure to resolve court matters may result in additional fees, warrant of arrest, suspension and/or denial of renewal of your driver's license and vehicle registration.
        </p>
        <p>
        Important information when paying for active arrest warrants:
        </p>
        <p>
        You may pay an active arrest warrant using this online payment system but you remain subject to arrest until the court has accepted your payment as a plea of no contest and processed the case for final disposition. This may take up to two (2) business days. To ensure the deactivation of an arrest warrant immediately, you must appear at the municipal court to pay your warrant.  If you or a family member are currently under arrest, do not use this payment system.
        </p>

        <h2>Payment information for other cases:</h2>

        <p>Fines may be paid over the Internet, 24 hours a day, using Visa or MasterCard credit/debit card and knowing the CVV access code printed on the back of the card.  Only payments for the FULL amount due will be accepted using the on-line payment service. A single violation can be paid on a citation with multiple violations, but paying one violation does not excuse your appearance requirements for any remaining violations.  An on-line payment will be processed as a plea of "no contest".  You will be found guilty of the offense charged on your citation which will result in a final conviction in your case. If applicable, such convictions will be reported to the Texas Department of Public Safety or to the state from which your driver’s license has been issued for inclusion on your driving record.  By paying on-line, you are also waiving your right to a trial and any right to appeal the conviction.  If you have any questions about the effect of your plea, consult legal counsel before proceeding.</p>

        <ul class="my-5">
        <li class="my-2"><b>You cannot use this service to pay a Deferred Disposition fee or Driving Safety Course fee.</b></li>
        <li class="my-2"><b>You cannot use this service to make a partial payment.</b></li>
        <li class="my-2"><b>You cannot use this service to pay a fine for a person in jail.</b></li>
        <li class="my-2"><b>You cannot use this service to pay cash bond.</b></li>
        <li class="my-2"><b>You cannot use this service to pay any dismissal fee.</b></li>
        <li class="my-2"><b>Voluntary online payment will result in a conviction and will be reported to the Texas Department of Public Safety and forfeits any right to request Driving Safety Class or Deferred Disposition for possible dismissal of your citation.</b></li>
        </ul>
        <p>Alcohol or Tobacco Violations - There are age restrictions for certain alcohol (under 21) and tobacco (under 18) violations. You may not pay online but must appear before the judge. Contact the court for more information at 972.219.3436. </p>

        <p>Juveniles – State law requires that juveniles (16 or younger) make a personal appearance with a parent or legal guardian before the judge.</p>

        <p>By clicking "I Agree", you acknowledge that you have read the terms of the on-line payment system and you agree to these terms.</p>

        <p><a href="https://www.trafficpayment.com/SearchByInvoiceInfo.aspx?csdId=716">I agree</a></p>

        <p><router-link to="/">I disagree</router-link></p>
    </div>
</v-container>
</template>

<script>
export default {
data() {
    return {
        showPayOnline: false
        }
    },
methods: {

},
mounted() {

},
created() {

}
}
</script>

<style>
ol,ul,p {
    font-size:1.4rem;
}
#showPayOnline {
    color:#1855B0;
    text-decoration:underline;
    cursor:pointer;
}
</style>

