FROM egladman/redbean as build

FROM scratch
LABEL architecture=arm64,amd64

COPY --from=build /redbean.com /
COPY static static
CMD ["/redbean.com", "-vv", "-p", "80", "-D", "/static"]
