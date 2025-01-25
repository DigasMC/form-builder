import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './App.css'
import FormBuilder from './components/FormBuilder'
import { parseFormJson } from './utils/formTypeUtils'
import { useState } from 'react';

function App() {
  const [formIndex, setFormIndex] = useState(0);

  // mock forms data, mimics the data we could fetch from an Database via API
  const forms = [
    {
      companyName: 'Company1',
      fields: [
        {
          label: 'Nome Colaborador',
          type: "text",
          validation: {
            required: true,
          },
        },
        {
          label: 'Email',
          type: "email",
          validation: {
            required: true,
          },
        },
        {
          label: 'Nº de Empregado',
          type: "text",
          validation: {
            required: true,
            pattern: "^[a-zA-Z0-9]{7}$",
          },
        },
      ],
    },
    {
      companyName: 'Company2',
      fields: [
        {
          label: 'Nome Cliente',
          type: "text",
          validation: {
            required: true,
          },
        },
        {
          label: 'Email',
          type: "email",
          validation: {
            required: true,
          },
        },
        {
          label: 'Data do Pedido',
          type: "date",
          validation: {
            required: true,
          },
        },
        {
          label: 'Comentário',
          type: "textarea",
        },
      ],
    },
    {
      companyName: 'Company3',
      fields: [
        {
          label: 'NIF',
          type: "number",
          validation: {
            required: true,
          },
        },
        {
          label: 'Telemóvel',
          type: "number",
          validation: {
            required: true,
          },
        },
        {
          label: 'Email',
          type: "email",
          validation: {
            required: true,
          },
        },
        {
          label: 'Departamentos',
          type: "multiselect",
          options: [
            'Human Resources', 
            'Finance', 
            'IT'
          ],
          validation: {
            required: true,
          },
        },
      ],
    },
  ]

  return (
    <>
      <Box> 
        <h1>Dynamic Form Builder</h1>

        <FormControl variant="outlined" sx={{ width: '100%' }}>
          <InputLabel>Company</InputLabel>
          <Select
            label="Company"
            value={formIndex}
            onChange={(e) => setFormIndex(e.target.value as number)}
          > 
            {forms.map((form, index) => (
              <MenuItem key={`form-${index}`} value={index}>{form.companyName}</MenuItem>
            ))}
          </Select>     
        </FormControl>

        <Card sx={{ width: '100%', marginTop: '20px' }}>
          <CardContent>
            <FormBuilder formFields={parseFormJson(JSON.stringify(forms[formIndex]))?.fields} />
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default App
