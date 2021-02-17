import React from 'react';
import { Controller } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
function SelectInput({ control, label, name, rule }) {
  return (
    <Controller
      control={control}
      render={({ onChange }) => (
        <Input
          containerStyle={{ width: '100%',borderColor:"gray",borderWidth:1 }}
          disabledInputStyle={{ background: '#585858' }}
          rightIcon={
              <Ionicons name={`caret-down`} color={'#585858'} size={15} />
          }
          onChangeText={(value) => onChange(value)}
          inputStyle={{ fontWeight: 'bold', color: '#585858' }}
          label={label}
          labelStyle={{ color: '#585858' }}
        />
      )}
      name={name}
      defaultValue=""
      rules={{ required: rule }}
    />
  );
}

export default SelectInput;
