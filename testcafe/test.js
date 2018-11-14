import Page from './page-model';
import { Selector, ClientFunction } from 'testcafe';

fixture `Login on dashdash page and some examples`
    .page `http://app-local.COMPANY.com:8080/auth/login/`;

// Page model
const page = new Page();

// Tests
/*
test('Login', async t => {
    await t
        .typeText(page.usernameInput, 'tiago.pedro+test@dashdash.com') // Type name
        .typeText(page.passwordInput, 'myP4ssw0rd')
        .click(page.loginButton)
        .expect(page.greeting.exists).ok()
        .expect(page.greeting.textContent).contains('Hi,')
        .expect(page.name.textContent).eql('Tiago'); // Check result
});


test('Create new app', async t => {
    await t
        .typeText(page.usernameInput, 'tiago.pedro+test@dashdash.com') // Type name
        .typeText(page.passwordInput, 'myP4ssw0rd')
        .click(page.loginButton)
        .expect(page.newAppButton.exists).ok()
        .click(page.newAppButton)
        .expect(page.canvas.exists).ok();
});
*/
test('Click on canvas', async t => {
    await t
        .typeText(page.usernameInput, '#INSERT_EMAIL#') // Type name
        .typeText(page.passwordInput, '#INSERT_PASSWORD#')
        .click(page.loginButton)
        .expect(page.newAppButton.exists).ok()
        .click(page.newAppButton)
        .expect(page.canvas.exists).ok()
        .setTestSpeed(0.7)
        .doubleClick(page.canvas, { offsetX: 132, offsetY: 32 })
        .expect(page.cellPosition.textContent).eql('B1')
        .expect(page.cellEditor.exists).ok()
        //.pressKey('j')
        //.pressKey('o')
        //.pressKey('a')
        .typeText(page.canvas, "john doe", {paste: true})
        /*.expect(page.cellPosition.textContent).eql('C1')
        .click(page.formulaBar)
        .typeText(page.formulaBar, 'abc', {paste: false})*/
        .expect(page.formulaBar.textContent).eql('TestCafe')
});

/*
test('Dealing with text using keyboard', async t => {
    await t
        .typeText(page.nameInput, 'Peter Parker') // Type name
        .click(page.nameInput, { caretPos: 5 }) // Move caret position
        .pressKey('backspace') // Erase a character
        .expect(page.nameInput.value).eql('Pete Parker') // Check result
        .pressKey('home right . delete delete delete') // Pick even shorter form for name
        .expect(page.nameInput.value).eql('P. Parker'); // Check result
});


test('Moving the slider', async t => {
    const initialOffset = await page.slider.handle.offsetLeft;

    await t
        .click(page.triedTestCafeCheckbox)
        .dragToElement(page.slider.handle, page.slider.tick.withText('9'))
        .expect(page.slider.handle.offsetLeft).gt(initialOffset);
});


test('Dealing with text using selection', async t => {
    await t
        .typeText(page.nameInput, 'Test Cafe')
        .selectText(page.nameInput, 7, 1)
        .pressKey('delete')
        .expect(page.nameInput.value).eql('Tfe'); // Check result
});


test('Handle native confirmation dialog', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(page.populateButton);

    const dialogHistory = await t.getNativeDialogHistory();

    await t.expect(dialogHistory[0].text).eql('Reset information before proceeding?');

    await t
        .click(page.submitButton)
        .expect(page.results.innerText).contains('Peter Parker');
});


test('Pick option from select', async t => {
    await t
        .click(page.interfaceSelect)
        .click(page.interfaceSelectOption.withText('Both'))
        .expect(page.interfaceSelect.value).eql('Both');
});


test('Filling a form', async t => {
    // Fill some basic fields
    await t
        .typeText(page.nameInput, 'Bruce Wayne')
        .click(page.macOSRadioButton)
        .click(page.triedTestCafeCheckbox);

    // Let's leave a comment...
    await t
        .typeText(page.commentsTextArea, "It's...")
        .wait(500)
        .typeText(page.commentsTextArea, '\ngood');

    // I guess, I've changed my mind
    await t
        .wait(500)
        .selectTextAreaContent(page.commentsTextArea, 1, 0)
        .pressKey('delete')
        .typeText(page.commentsTextArea, 'awesome!!!');

    // Let's submit our form
    await t
        .wait(500)
        .click(page.submitButton)
        .expect(page.results.innerText).contains('Bruce Wayne');
});
*/
