Name: nethvoice-wizard-ui
Version: 14.4.4
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
* Wed May 06 2020 Davide Principi <davide.principi@nethesis.it> - 14.4.4-1
- Models list alphabetically ordered - Bug nethesis/dev#5790
- Deny the creation of modules with same names - Bug nethesis/dev#5789
- Space in custom module breaks the Modules view - Bug nethesis/dev#5784
- All default variables are copied to model scope on model variables save - Bug nethesis/dev#5787

* Thu Apr 30 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.3-1
- Feedback of failed RPS insertion - nethesis/dev#5785
- Wizard: improve info about line keys settings for admin - nethesis/dev#5783
- Allow to enable/disable ldap phonebook from wizard - nethesis/dev#5766
- "Copy Url" button does not work into the wizard devices -> phones page - Bug nethesis/dev#5779
- Add queuetoggle configuration for linekeys of physical phones - nethesis/dev#5778

* Thu Apr 16 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.2-1
- Allow or deny access to SIPS and RTP port from red interfaces - nethesis/dev#5763
- Configure NAT settings - nethesis/dev#5772
- Restore mobile number management functions (#86)

* Wed Apr 01 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.1-1
- Hide phone buttons permission if provisioning engine is freepbx
- Add exception in ldap_server placeholder
- Reduce timeout before association success message
- New LDAP phonebook labels and i18n fixes (#82)
- Add enable mobile app button
- Fix ui build and dependencies (#81)
- New provisioning UI

* Mon Jul 15 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.0-1
- Fix the deletion of routes containing symbols nethesis/dev#5674
- Fix physical trunks configuration download nethesis/dev#5678

* Tue Jul 02 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.2-1
- Fix extens colors into the wizard dashboard (#57) nethesis/dev#5659

* Fri Apr 05 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.1-1
- Call /logout API on logout nethesis/dev#5598

* Tue Mar 26 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.0-1
- Add phonebook sources page nethesis/dev#5557

* Tue Mar 12 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.2-1
- Fix page names overflow on expanded collapse nethesis/dev#5582
- Fix dashboard not found messages nethesis/dev#5582
- Fix spinner behaviour on route change
- Remove wizard steps if is not wizard nethesis/dev#5582

* Fri Feb 08 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.1-1
- Fix brand logo for rebranding Nethesis/dev#5574
- Enhance all search filtering on objects Nethesis/dev#5572
- Allow only one queue turned on in Operator Panel permissions Nethesis/dev#5549

* Fri Jan 11 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.0-1
- Add dashboard wizard nethesis/dev#5544
- Add migration from NethVoice 11 to 14 nethesis/dev#5454

* Mon Nov 12 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.6-1
- Fix bulk extension outcid nethesis/dev#5493
- Better user and device UI nethesis/dev#5493

* Thu Oct 04 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.5-1
- Fix gateway configuration download on trunks nethesis/dev#5472
- Add order to users list in configuration nethesis/dev#5430

* Fri Jul 27 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.4-1
- Add order to users list in configuration nethesis/dev#5430
- Queue manager permission translation

* Wed Jun 06 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.3-1
- Add mac addr to gateway configuration push
- Add Outbound CID to bulk extensions nethesis/dev#5402
- Add parameterized URLs nethesis/dev#5412
- Csv add export button and show buttons even in unified communication mode nethesis/dev#5401

* Wed May 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.2-1
- Remove unused "remote sites" permission nethesis/dev#5397
- Adjust extensions configuration filter layout
- Fix users configuration content layout

* Wed Apr 18 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.1-1
- Set outbound routes as browser language if not selected nethesis/dev#5381
- Change dashboard titles style nethesis/dev#5380
- Fix mobile nethvoice logo height nethesis/dev#5380
- Update css nethesis/dev#5380

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

