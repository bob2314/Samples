/***
 *
 *
 *  This is snippet taken from a larger object initializer used
 *  within Saatchi Art's eCommerce admin panel / invoicing system.
 *
 *  I like JS module & revealing module patterns
 *
 *  In production, 2015
 *
 */


thing.modules.config = {
    data : {},
    init : function() {
        if (!localStorage.getItem('config')) {
            localStorage.setItem('config', JSON.stringify({}));
        }
        this.data = $.parseJSON(localStorage.getItem('config'));
    },
    save : function() {
        localStorage.setItem('config', JSON.stringify(this.data));
    },
    get : function(key) {
        return (this.data[key] !== '' ? this.data[key] || {} : {});
    },
    set : function(key, value) {
        this.data[key] = value;
        this.save();
    }
};