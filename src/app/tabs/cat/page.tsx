import { CommonButton } from 'components/index';
import s from './cat.module.scss';

export default function CatPage() {
  return (
    <section className={s.tab__cat}>
      <CommonButton text={'HOME'} type={'home'} />
      something interesting about my lovely cat!
    </section>
  );
}
