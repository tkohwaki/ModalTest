var convenient = {
    close: (target) => {
        //$('body').removeClass('modal-open');
        //$('.modal-backdrop').remove();
        var eleid = '#' + target;
        $(eleid).modal('hide');
    },
    open: (target) => {
        var eleid = '#' + target;
        $(eleid).modal();
    }
};