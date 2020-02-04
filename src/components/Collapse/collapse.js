import React from 'react';

export default {
  title: 'Collapse',
};

export const normal = () => (
  <>
  <article>
    <button type="button" id="readMoreCollapse" class="btn btn-more" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Läs mer</button>
    <div class="collapse" id="collapseExample">
      <p>Passar om du
      </p><ul>
        <li>vill ändra fördelningen mellan fonderna du har.</li>
        <li>vill byta ut fonder och välja ny fördelning i procent.</li>
        <li>ser ditt sparande som en fondportfölj</li>
      </ul>
      Fondhandeln kan exempelvis bero på att du har beställt ett fondbyte, uttag av skatt eller en kommande utbetalning.<p></p>
    </div>
  </article>
  </>
);
export const withBackgroundAndCloseButton = () => (
  <>
    <article>
      <button type="button" id="readMoreCollapseWithBackground" class="btn btn-more" data-toggle="collapse" href="#collapseExampleWithBackground" aria-expanded="false" aria-controls="collapseExample">Läs mer</button>
      <div class="bg-body-bg  mb-20 collapse" id="collapseExampleWithBackground">
          <div class="col-md-9 p-1">
          <p>Passar om du
          </p><ul>
            <li>vill ändra fördelningen mellan fonderna du har.</li>
            <li>vill byta ut fonder och välja ny fördelning i procent.</li>
            <li>ser ditt sparande som en fondportfölj</li>
          </ul>
          Fondhandeln kan exempelvis bero på att du har beställt ett fondbyte, uttag av skatt eller en kommande utbetalning.<p></p>
          <button class="btn btn-link" data-toggle="collapse" href="#collapseExampleWithBackground">Stäng</button>
        </div>
      </div>
 </article>
  </>
);
export const CollapsibleCards = () => (
  <>
    <button class="collapse-toggle" role="button" type="button" aria-controls="collapsible1" data-toggle="collapse" data-target="#collapsible1" aria-expanded="false">
      Insurances
    </button>
    <article class="collapse" id="collapsible1">
      <h1 class="sr-only">Insurances</h1>
      <div class="card mb-0">
        <div class="card-block">
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex diam, ultrices eu diam at, tristique mattis risus. Aenean tristique efficitur sem sed pulvinar. Morbi in felis ex.
          </p>
        </div>
      </div>
    </article>
  </>
);

export const CollapsibleCardsExpandedAsDefault = () => (
  <>
    <button class="collapse-toggle" role="button" type="button" aria-controls="collapsible1" data-toggle="collapse" data-target="#collapsible3" aria-expanded="true">
      Pension
    </button>
    <article class="collapse show" id="collapsible3">
      <h1 class="sr-only">Pension</h1>
      <div class="card mb-0">
        <div class="card-block">
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus, turpis nec gravida molestie, nulla felis mattis felis, et interdum arcu tellus ac est.
          </p>
        </div>
      </div>
    </article>
  </>
);

export const CollapsibleCardsWithLazyLoad = () => (
  <>
    <button class="collapse-toggle js-asyncCollapse" role="button" type="button" aria-controls="collapsible2" data-toggle="collapse:async" data-target="#collapsible2" aria-expanded="false">
      Transactions
    </button>
    <div class="collapse" id="collapsible2">
    </div>
  </>
);

