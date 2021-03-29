class Election:
    def __init__(self, new_year):
        self.year = new_year
        self.all_parties = []
        self.all_electorates = []
        self.party_count = 0
        self.electorate_count = 0

    def __str__(self):
        result = f'The Election {self.year} \n'
        return result

    def add_party(self, new_name):
        a_party = Party(new_name)
        self.all_parties.append(a_party)
        self.party_count += 1

    def add_electorate(self, new_name):
        a_electorate = Electorate(new_name)
        self.all_electorates.append(a_electorate)
        self.electorate_count += 1

    def to_table(self):
        result = f'<table><tr><th colspan="3">The Election {self.year} </th></tr><tr><th>Parties</th></tr>'
        for a_party in self.all_parties:
            result += a_party.to_table_row()
        result += '<tr><th>Electorates</th></tr>'
        for a_electorate in self.all_electorates:
            result += a_electorate.to_table_row()
        result += '</table>'
        return result


class Electorate:
    def __init__(self, new_name):
        self.name = new_name

    def __str__(self):
        result = f'{self.name}'
        return result

    def to_table_row(self):
        result = '<tr>'
        result += f'<td>{self.name}</td>'
        result += '</tr>'
        return result


class Party:
    def __init__(self, new_name):
        self.name = new_name

    def __str__(self):
        result = f'{self.name}'
        return result

    def to_table_row(self):
        result = '<tr>'
        result += f'<td>{self.name}</td>'
        result += '</tr>'
        return result


if __name__ == '__main__':
    the_election = Election(2020)
    print(the_election)
