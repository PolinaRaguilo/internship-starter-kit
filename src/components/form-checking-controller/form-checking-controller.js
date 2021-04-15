import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const FormController = ({
  err,
  name,
  defaultParam,
  labelName,
  textHelp,
  rulesValidation,
  control,
}) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField
          error={err ? true : false}
          variant="outlined"
          label={labelName}
          className="edit__input"
          helperText={err && textHelp}
          {...field}
        />
      )}
      control={control}
      rules={rulesValidation}
      defaultValue={defaultParam}
    />
  );
};

export default FormController;
