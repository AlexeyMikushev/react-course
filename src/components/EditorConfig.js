import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            '|',
            'bold',
            'italic',
            'bulletedList',
            'numberedList',
            'blockQuote',
            'undo',
            'redo'
        ]
    },
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
        ]
    },
    language: [
        'en',
        'ru'
        ]
};
