jQuery(document).ready(function($) {

    /*--------------------------------------------------------------
     # BMI Calculator Ajax Call
     --------------------------------------------------------------*/
    $('form#bmi-calculator').on( 'submit', function(e) {

        $.ajax({
            url : krucial_ajax.ajax_url,
            type : 'POST',
            dataType : 'text',
            data : {
                'action' : 'fitnessgym_bmi_calculator',
                'bmi_weight' : $('#bmi-calculator #bmi_weight').val(),
                'bmi_height' : $('#bmi-calculator #bmi_height').val(),
                'calculator_security': $('#bmi-calculator #calculator_security').val()
            },
            success : function( response ) {
                $('.bmi-results').html( response );
            },
        });
        e.preventDefault();

    });
    

}); // end document ready