
function addExtraImages(config) {
    config.images.unshift('https://api.bl.uk/image/iiif/ark:/81055/vdc_100054594479.0x00001b');
    if (config.regions && config.regions.length > 3) {
        config.regions.splice(2,0,'1095,1697,442,656');
    }
}
