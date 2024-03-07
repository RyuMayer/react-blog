import { ThreeDots } from 'react-loader-spinner';

export function UiPageLoader() {
  return (
    <ThreeDots
      color="#1A1A1A"
      width={100}
      height={100}
      wrapperStyle={{
        'justify-content': 'center',
        'flex-grow': '1',
        'align-items': 'center',
      }}
    />
  );
}
