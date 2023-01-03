import { useState, useMemo, useRef, useCallback } from 'react';

import { Options } from './options';
import { SelectField } from './select-field';
import { useOnClickOutside, validate } from './helpers';

const { cn } = BackendlessUI.CSSUtils;

export default function MultipleSelectComponent({ component, eventHandlers }) {
  const {
    display, classList, disabled, placeholder, selectAllCheckbox, selectAllLabel, variant, type, value, options
  } = component;
  const { onChange } = eventHandlers;

  const rootRef = useRef(null);
  const [isOptionsOpen, setIsOptionsOpen]= useState(false);
  const [selectValue, setSelectValue] = useState([]);
  const [isSelectActive, setIsSelectActive] = useState(false);

  const optionsList = useMemo(() => validate(options), [options]);
  const classes = cn(
    'bl-customComponent-multipleSelect', variant, classList,
    { 'bl-customComponent-multipleSelect--disabled': disabled }
  );

  const handleClickOutside = useCallback(() => {
    if (isOptionsOpen) {
      setIsOptionsOpen(false);
    } else {
      setIsSelectActive(false);
    }
  }, [isOptionsOpen]);

  useOnClickOutside(rootRef, handleClickOutside);

  if (!display) {
    return null;
  }

  return (
    <div
      ref={ rootRef }
      className={ classes }>
      <SelectField
        type={ type }
        placeholder={ placeholder }
        selectValue={ selectValue }
        isOptionsOpen={ isOptionsOpen }
        isSelectActive={ isSelectActive }
        setIsOptionsOpen={ setIsOptionsOpen }
        setIsSelectActive={ setIsSelectActive }
      />
      { isOptionsOpen &&
        <Options
          type={ type }
          options={ optionsList }
          selectValue={ selectValue }
          selectAllLabel={ selectAllLabel }
          selectAllCheckbox={ selectAllCheckbox }
          onChange={ onChange }
          setSelectValue={ setSelectValue }
        />
      }
    </div>
  );
};
