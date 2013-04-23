iD.data = {
    load: function(path, callback) {
        if (!callback) {
            callback = path;
            path = '';
        }
        iD.util.asyncMap([
            path + 'data/deprecated.json',
            path + 'data/discarded.json',
            path + 'data/imagery.json',
            path + 'data/wikipedia.json',
            path + 'data/presets/floorplan-presets.json',
            path + 'data/presets/floorplan-defaults.json',
            path + 'data/presets/floorplan-categories.json',
            path + 'data/presets/floorplan-fields.json',
            path + 'data/imperial.json',
            path + 'data/maki-sprite.json',
            path + 'data/locales.json',
            path + 'dist/locales/en.json'
            ], d3.json, function (err, data) {

            iD.data = {
                deprecated: data[0],
                discarded: data[1],
                imagery: data[2],
                wikipedia: data[3],
                presets: {
                    presets: data[4],
                    defaults: data[5],
                    categories: data[6],
                    fields: data[7]
                },
                imperial: data[8],
                maki: data[9],
                locales: data[10],
                en: data[11]
            };

            callback();
        });
    }
};
