///<reference types="Cypress"/>

 describe('Guru99', () => {
    before(function() {

     cy.fixture('example').then(function(data) {
        globalThis.data=data;
     }
     )
    })

    it('Testing', () => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.contains('REGISTER').click()
        cy.get('input[name="firstName"]').type(data.Firstname)
        cy.get('input[name="lastName"]').type(data.lastname)
        cy.get('input[name="phone"]').type(data.phoneno)
        cy.get('input[name="userName"]').type(data.email)
        cy.get('input[name="address1"]').type(data.address)
        cy.get('input[name="city"]').type(data.city)
        cy.get('input[name="state"]').type(data.state)
        cy.get('input[name="postalCode"]').type(data.postalCode)
        cy.get('select[name="country"]').select("INDIA")
        cy.get('input[name="email"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="confirmPassword"]').type(data.password)
        cy.get('input[name="submit"]').click()
    });


        //login or sign in

        it.only('sign in', () => {

            cy.visit("https://demo.guru99.com/test/newtours/register.php")
            cy.contains('SIGN-ON').click()
            cy.get('input[name="userName"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('input[name="submit"]').click()
            
        });

        it.only('Flights', () => {
        cy.visit("https://demo.guru99.com/test/newtours/reservation.php")
        cy.contains("Flights").click()
        cy.get('input[value="roundtrip"]').check()
        cy.get('select[name="passCount"]').select("2")
        cy.get('select[name="fromPort"]').select("London")
        cy.get('select[name="fromMonth"]').select("8")
        cy.get('select[name="fromDay"]').select("12")
        cy.get('select[name="toPort"]').select("Paris")
        cy.get('select[name="toMonth"]').select("12")
        cy.get('select[name="toDay"]').select("2")
        cy.get('input[value="Business"]').check()
        cy.get('select[name="airline"]').select('Blue Skies Airlines')
        cy.get('input[name="findFlights"]').click()
        cy.url().should('include','reservation2')
            
        });

        it.only('Book a hotel', () => {
            cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href="support.php"]').contains('Hotels').click()
            cy.get('img[src="images/home.gif"]').click()
        });
        it.only('Book a car', () => {
            cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href="support.php"]').contains('Car Rentals').click()
            cy.get('img[src="images/home.gif"]').click()
        });
        it.only('Book a cruises', () => {
            cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href="index.php"]').contains('Cruises').click()
        });
        it.only('Book a Destinations', () => {
            cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href="support.php"]').contains('Destinations').click()
            cy.get('img[src="images/home.gif"]').click()
        });
        it.only('Book a Vacations', () => {
            cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href="support.php"]').contains('Vacations').click()
            cy.get('img[src="images/home.gif"]').click()
        });
    });
// });