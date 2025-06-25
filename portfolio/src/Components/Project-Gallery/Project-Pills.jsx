import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import React, { useState } from 'react';
import dataSet from '../../utils/Projects.json';


function Tags ({})


function Pills() {
  return (

    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="primary">
        Primary
      </Badge>
      <Badge pill bg="secondary">
        Secondary
      </Badge>
      <Badge pill bg="success">
        Success
      </Badge>
      <Badge pill bg="danger">
        Danger
      </Badge>
      <Badge pill bg="warning" text="dark">
        Warning
      </Badge>
      <Badge pill bg="info">
        Info
      </Badge>
      <Badge pill bg="light" text="dark">
        Light
      </Badge>
      <Badge pill bg="dark">
        Dark
      </Badge>
    </Stack>
  );
}

export default Pills;