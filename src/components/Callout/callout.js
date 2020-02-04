import React from 'react';

export default {
  title: 'Callout',
};

 

export const callout = () => {
  const item = document.querySelectorAll('.callout-figure');
  console.log(item);
  
  return <aside class="callout">
    <div class="callout-figure">
      <svg id="callout" data-draw="" width="27px" height="27px" viewBox="0 0 27 27" >
        <polyline id="Path-2656" fill="none" stroke-width="4" stroke="#E30613" points="3 27 3 3 27 3" />
      </svg>
    </div>
    <h3 class="callout-title">The more you know…</h3>
    <p class="callout-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc augue, porta eu molestie id, rhoncus eu risus. Etiam rhoncus vitae libero vulputate ornare. Praesent urna mauris, egestas sed lacinia vitae, tincidunt id turpis.
    </p>
  </aside>
}


//TODO these should be depreched

// export const success = () => (
//   <span class="badge badge-success">Badge</span>
// );

// export const info = () => (
//   <span class="badge badge-info">Badge</span>
// );

// export const warning = () => (
//   <span class="badge badge-warning">Badge</span>
// );

// export const danger = () => (
//   <span class="badge badge-danger">Badge</span>
// );




