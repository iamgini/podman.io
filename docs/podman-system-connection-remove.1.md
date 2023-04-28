% podman-system-connection-remove 1

## NAME

podman\-system\-connection\-remove - Delete named destination

## SYNOPSIS

**podman system connection remove** [*options*] _name_

## DESCRIPTION

Delete named ssh destination.

## OPTIONS

#### **--all**, **-a**

Remove all connections.

## EXAMPLE

```
$ podman system connection remove production
```

## SEE ALSO

**[podman(1)](podman.1.md)**, **[podman-system(1)](podman-system.1.md)**, **[podman-system-connection(1)](podman-system-connection.1.md)**

## HISTORY

July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)