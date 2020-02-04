import React from 'react';

export default {
  title: 'Breadcrumb',
};

export const normal = () => (
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#foo">Private banking</a></li>
    <li class="breadcrumb-item"><a href="#foo">Insurances</a></li>
    <li class="breadcrumb-item active">Car insurance</li>
  </ol>
);


