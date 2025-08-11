import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  changelogLink,
  version,
  divResult
} from '../locators/exampleLocators';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getElementByRole
} from '../utils/interactions';

Given("El usuario navega a la pagina de k0lmena", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When('El usuario clickea el link de Changelog', async function () {
  for (const page of pages) {
    await page.getByText(changelogLink).click();
  }
});

When('El usuario clickea la version 2.0.0', async function () {
  for (const page of pages) {
    await page.getByRole('link', {name:version})
  }
});

Then('El usuario ve la informacion de la version 2.0.0', async function () {
  for (const page of pages) {
    expect(validateFirstLocator(page, "div", divResult)).toBeTruthy();
  }
});
