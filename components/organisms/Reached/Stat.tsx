import cx from 'classnames';

interface StatProps {
    stats: string;
    label: string;
    isFirst?: boolean;
}

export default function Stat(props: Partial<StatProps>) {
  const { stats, label, isFirst } = props;
  const classMargin = cx({
    'me-lg-35': true,
    'ms-lg-35': !isFirst,
  });

  return (
    <div className={classMargin}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{stats}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{label}</p>
    </div>
  );
}
