Name: nethvoice-wizard-ui
Version: 14.1.0
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
* Mon Apr 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.0-1
- Add wizard page for bulk operations nethesis/dev#5365
- Wizard add import from csv file nethesis/dev#5371

* Fri Mar 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.0.1-1
- Fix default selected codec in voip trunks nethesis/dev#5356
- Block next step if there aren't extensions nethesis/dev#5356
- Fix switch visualization nethesis/dev#5346
- make navbar numbers dinamic nethesis/dev#5347

* Fri Feb 23 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.0.0-1
- Created nethvoice-wizard-ui RPM instead of embed it into nethserver-nethvoice14. Nethesis/dev#5341
- Enhance language section and fix page loaders. Nethesis/dev#5340
- Usability minor fixes. Nethesis/dev#5325

