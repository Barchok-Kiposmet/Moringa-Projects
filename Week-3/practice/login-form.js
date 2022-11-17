
        $(document).ready(() => {
           
            $('button#loginbutton').click(()=>{

                const emailValue = $('input#emailbox').val();
                const passwordValue = $('input#passwordbox').val();

                let message; // this will be replaced later at text here and is dynamic

                // performing logical checks on inputs

                if (emailValue == ' ' || passwordValue == ' ') message = 'Please provide a valid email and/or password';
                   
                    else { if (!String(emailValue).includes('@')) message = 'Please provide a valid email';
                 
                        // else if (String(emailValue).length < 5) message = 'please provide a valid email and/or password';
                    
                            else if (String(passwordValue).length < 5) message = 'please provide a password of more than 5 characters';
                                
                                else message = 'Logged in Successfully as'+ ' ' + emailValue; 
                    }
                        
                    // return the message at results here

                $('p#loginresult').text(message);
                            

            });

        
        // event.preventDefault();    

        });