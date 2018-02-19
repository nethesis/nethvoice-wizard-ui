Name: nethvoice-wizard-ui
Version: 14.0.0
Release: 1%{?dist}
Summary: UI for NethVoice
Group: Network
License: GPLv2
Source0: %{name}-%{version}.tar.gz
BuildRequires: nethserver-devtools
BuildRequires: nodejs npm git http-parser
Buildarch: noarch
Requires: nethserver-freepbx

%description
NethVoice UI

%prep
%setup


%build
perl createlinks

# Wizard UI
(cd wizard && npm install yarn && node_modules/yarn/bin/yarn install && node_modules/grunt-cli/bin/grunt build)
mkdir -p root/var/www/html/freepbx/wizard
cp -r wizard/dist/* root/var/www/html/freepbx/wizard/


%install
rm -rf %{buildroot}
(cd root; find . -depth -print | cpio -dump %{buildroot})

%{genfilelist} %{buildroot} \
> %{name}-%{version}-filelist


%clean
rm -rf %{buildroot}

%files -f %{name}-%{version}-filelist
%defattr(-,root,root,-)
%dir %{_nseventsdir}/%{name}-update

%doc

%changelog
