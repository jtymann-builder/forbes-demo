import './Divider.scss';

export default function Divider({
  width = 'full',
  thickness = 'medium',
  align = 'left',
  spacing = 'none',
}) {
  return (
    <div className={`builder-divider builder-divider--align-${align} builder-divider--spacing-${spacing}`}>
      <hr className={`builder-divider__line builder-divider--width-${width} builder-divider--thickness-${thickness}`} />
    </div>
  );
}
