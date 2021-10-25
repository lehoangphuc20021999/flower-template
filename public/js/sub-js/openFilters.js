function openFilters() {
    $(document).ready(function () {
        //- Open filter in collection.pug
        $('.open-filters').click(function (e) {

            //- Chuyển icon
            $(this).find('i').toggleClass("bxs-filter-alt bx-x");

            //- Mở filters
            if ($('.aside').hasClass('open') || $('.open-filters').hasClass('open')) {
                $('.aside, .open-filters, #collection .overlay').removeClass('open')
                $(document.body).removeClass('overflow-hidden')
            }
            else {
                $('.aside, .open-filters, #collection .overlay').addClass('open')
                $(document.body).addClass('overflow-hidden')
            }
        })

        //- Click outside and close filter menu
        $(document).on("click", function (e) {
            const container = $('#collection')
            console.log(e.target, $(e.target).hasClass('overlay'));

            if ((!container.is(e.target) && container.has(e.target).length === 0) || $(e.target).hasClass('overlay')) {
                $('.aside, .open-filters, #collection .overlay').removeClass('open');
                $('.open-filters').find('i').toggleClass("bxs-filter-alt bx-x");
                $(document.body).removeClass('overflow-hidden')
            }
        })
    });
}

export { openFilters };