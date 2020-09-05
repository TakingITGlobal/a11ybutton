import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({
  id,
  activePanels,
  heading,
  label,
  children: panelChildren,
}) => {
  const panelId = id.split('-')[id.split('-').length - 1];
  return (
    activePanels.includes(panelId) && (
      <div className="option" id={id}>
        <h2>{heading}</h2>
        <label htmlFor={panelId} id={`${id}-label`}>
          {label}
        </label>
        <div className="input">{panelChildren}</div>
      </div>
    )
  );
};

Panel.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activePanels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Panel;
