build() {
    mkdir $1
    cp -r images $1
    cp *.js *html $1
    cp LICENSE README.md $1
    cp ./$2 ${1}/manifest.json
    jq --arg version $(cat version.txt) '.version = $version' ./$2 > ${1}/manifest.json
    cd $1
    zip -r pdf2abstract_${1}.zip .
    mv pdf2abstract_${1}.zip ../build
    cd ..
    rm -rf $1
}

# Firefox build (manifestv2)
build ff manifestv2.json

# Chrome build (manifestv3)
build chrome manifestv3.json
