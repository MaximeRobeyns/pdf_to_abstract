.PHONY: release
release:
	zip -r pdf2abstract.zip . -x "*.git*" -x "Makefile"
