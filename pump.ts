import pump from 'pump';
import wrap2Promise from './lib/wrap2Promise';

export default wrap2Promise(pump);