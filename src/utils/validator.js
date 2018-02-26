export const mustRequired  = value => ( value ? undefined : 'Required' );
export const mustEmail     = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( value ) ? 'Invalid email address' : undefined;
export const warnEmail     = value => value && /.+@youjizz\.com/.test(value) ? 'Great guy' : undefined;
