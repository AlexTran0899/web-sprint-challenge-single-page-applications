describe('user input',() =>{
    beforeEach(()=>{ 
        cy.visit('http://localhost:3000/Pizza');

    })
    it('sanitiest to make sure it works', () =>{ 
        cy.get('input[name="name"]').should("exist")
        cy.get('select[name="size"]').should("exist")
        cy.get('input[name="sauce"]').should("exist")
        cy.get('input[name="Pepperoni"]').should("exist")
        cy.get('input[name="Sausage"]').should("exist")
        cy.get('input[name="CanadianBacon"]').should("exist")
        cy.get('input[name="SpicyItalianSausage"]').should("exist")
        cy.get('input[name="GrilledChicken"]').should("exist")
         cy.get('input[name="Onions"]').should("exist")
         cy.get('input[name="GreenPepper"]').should("exist")
         cy.get('input[name="DicedTomatos"]').should("exist")
         cy.get('input[name="BlackOlives"]').should("exist")
         cy.get('input[name="RoastedGarlic"]').should("exist")
         cy.get('input[name="ArthichokeHeart"]').should("exist")
         cy.get('input[name="ThreeCheese"]').should("exist")
         cy.get('input[name="Pineapple"]').should("exist")
         cy.get('input[name="ExtraCheese"]').should("exist")
         cy.get('input[name="GluetenFreeCrust"]').should("exist")
        cy.get('input[name="specialInstruction"]').should("exist")
        cy.get('button[id="addtocart"]').should("exist")
        cy.get('button[id="place order"]').should("exist")
    })
    it('typing data', () =>{ 
        cy.get('input[name="name"]').type("alex tran")
        cy.get('select[name="size"]').select("small")
        cy.get('input[name="Pepperoni"]').click()
        cy.get('input[name="Sausage"]').click()
        cy.get('input[name="CanadianBacon"]').click()
        cy.get('input[name="SpicyItalianSausage"]').click()
        cy.get('input[name="GrilledChicken"]').click()
         cy.get('input[name="Onions"]').click()
         cy.get('input[name="GreenPepper"]').click()
         cy.get('input[name="DicedTomatos"]').click()
         cy.get('input[name="BlackOlives"]').click()
         cy.get('input[name="RoastedGarlic"]').click()
         cy.get('input[name="ArthichokeHeart"]').click()
         cy.get('input[name="ThreeCheese"]').click()
         cy.get('input[name="Pineapple"]').click()
         cy.get('input[name="ExtraCheese"]').click()
         cy.get('input[name="GluetenFreeCrust"]').click()
        cy.get('input[name="specialInstruction"]').type("extra pizza please")
        cy.get('button[id="addtocart"]').click()
        cy.get('button[id="place order"]').click()
      
    })
    it('checking to see if its empty',()=>{
        // cy.get('input[name="username"]').should("have.value","")
        // cy.get('input[name="email"]').should("have.value","")
        // cy.get('input[name="password"]').should("have.value","")
        // cy.get('input[name="term"]').should("be.unchecked")
    })
})