// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "./commands";
import { mount } from "cypress/react18";
import "@/styles/globals.css";
import "@/styles/Home.module.css";
import "@/styles/Header.module.css";
import "@/styles/BlockTable.module.css";
import "@/styles/LoadingScreen.module.css";
import "@/styles/TableFooter.module.css";
import "@/styles/Transaction.module.css";
import "@/styles/TransactionTable.module.css";


// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
