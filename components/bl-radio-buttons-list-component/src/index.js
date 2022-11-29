import { useState, useEffect, useMemo } from 'react';

import { RadioButton } from './components';

const { cn } = BackendlessUI.CSSUtils;

export default function RadioButtonsListComponent({ component, eventHandlers }) {
  const { classList, style, display, disabled, options, value } = component;
  const { onChange } = eventHandlers;

  const [optionsList, setOptionsList] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const classes = useMemo(() => (
    cn(
      "bl-customComponent-radioButtonsList", classList,
      { "bl-customComponent-radioButtonsList--disabled": disabled }
    )
  ), [classList, disabled]);

  component.getValue = () => selectedValue;
  component.setValue = value => setSelectedValue(value);
  component.getOptions = () => optionsList;
  component.setOptions = options => setOptionsList(options);

  useEffect(() => {
    setOptionsList(validate(options));
    setSelectedValue(value);
  }, [options, value]);

  const handleChange = value => {
    setSelectedValue(value);
    onChange({ value });
  };

  if (!display) {
    return null;
  }

  return (
    <div
      style={ style }
      className={ classes }>
      { optionsList.map(({ label, value }) => (
        <RadioButton
          key={ value }
          checked={ value === selectedValue }
          label={ label }
          value={ value }
          handleChange={ handleChange }
        />
      )) }
    </div>
  );
}

const validate = arr => Array.isArray(arr) ? arr : [];