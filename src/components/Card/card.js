import React from 'react';

export default {
  title: 'Card',
};

export const standard = () => (
  <section class="card">
    <h3 class="card-header">Some kewl section</h3>
    <div class="card-block">
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor risus pellentesque eros scelerisque, et euismod lectus tempus. Maecenas at ornare magna. Sed vitae consequat risus. Cras ultrices nec magna in placerat.</p>
    </div>
  </section>
);

export const article = () => (
  <article class="card">
    <img class="card-img-top" src="http://placehold.it/800x640/ffffff" alt="Card image cap" />
    <div class="card-block">
      <p class="card-text">
        <small class="text-muted">2016-05-01</small>
      </p>
      <h3 class="card-title">Card title</h3>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="card-footer">
      <span class="text-muted">A minor note</span>
    </div>
  </article>
);

export const link = () => (
  <div class="card">
    <a href="#foo" class="link-complex layout-flex layout-column">
      <img class="card-img-top" src="http://placehold.it/640x430/ffffff" alt="Card image cap" />
      <div class="card-block">
        <p class="card-text">
          <small class="text-muted">2016-05-01</small>
        </p>
        <h3 class="card-title"><span class="link-complex-target">Card title</span></h3>
        <p class="card-text">Some quick example text that's shorter than the other.</p>
      </div>
    </a>
  </div>
);

export const equalHeight = () => (
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="http://placehold.it/600x500/ffffff" />
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="http://placehold.it/400x700/ffffff" />
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="http://placehold.it/350x500/ffffff" />
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
);

export const CardTextFloat = () => (
  <article class="card card-text-float">
    <img class="card-img-top" src="http://placehold.it/800x640/dddddd" alt="Card image cap" />
    <div class="card-block">
      <p class="card-text">
        <small class="text-muted">2016-05-01</small>
      </p>
      <h3 class="card-title">Card title</h3>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="card-footer">
      <span class="text-muted">A minor note</span>
    </div>
  </article>
);
  
